import React, { useEffect, useState } from "react";
import styles from "../categories/category.module.css";
import Styles from "../component/Style.module.css";
import SwitchTab from "../component/SwitchTab";
import { Filter, Plus, Search } from "../Svg";
import Cards from "./Cards";
import { useNavigate } from "react-router-dom";
import Modal from "../component/Modal";
import AddNewCategory from "./AddNewCategory";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";
import CategoriesRequestList from "./CategoriesRequestList";
import { useDispatch, useSelector } from "react-redux";
import { categories, searchCategory } from "../redux/categoriesSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const catData = useSelector((state) => state.categories.catData);
  const isRefresh = useSelector((state) => state.categories.isRefresh);
  const searchData = useSelector((state) => state.categories.searchData);

  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(categories());
  }, [dispatch, isRefresh]);

  useEffect(() => {
    setData(catData);
  }, [catData]);

  useEffect(() => {
    if (search) {
      dispatch(searchCategory({ query: search }));
    } else {
      setData(catData);
    }
  }, [search, dispatch, catData]);

  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);

  const openEditModal = (data) => {
    setData(data);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (data) => {
    setData(data);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [value, setValue] = useState([
    { val: "All Categories", id: 0 },
    { val: "New category request", id: 1 },
  ]);
  const [selected, setSelected] = useState(0);

  const changeID = (id) => {
    setSelected(id.id);
  };

  useEffect(() => {
    setSelected(selected);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <div className={styles.container}>
        <div>
          <div>
            <h2 className={styles.categoryText}>Categories</h2>
          </div>
          <span className={styles.home}>
            home <img src="/tiangle.png" style={{ marginLeft: 10 }} />{" "}
            <span style={{ color: "var(--Gray-900, #1E5EFF)", marginLeft: 10 }}>
              Categories
            </span>
          </span>
        </div>
        <div className={styles.buttonStyle} onClick={openModal}>
          <Plus />
          <div className={styles.addcategoryText}>Add Categories</div>
        </div>
      </div>
      <div className={styles.container}>
        <div style={{ marginTop: 20 }}>
          <SwitchTab
            value={value}
            selected={selected}
            onChange={(id) => changeID(id)}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <div className={Styles.width}>
            <div className={styles.search}>
              <Search />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name..."
              />
            </div>
            <div className={styles.filter}>
              <Filter /> <span>Filter</span>
            </div>
          </div>
        </div>
      </div>

      {selected === 0 ? (
        <>
          {data?.length > 0 ? (
            <div className={styles.cardWrap}>
              {data.map((item, key) => (
                <div key={key}>
                  <Cards
                    image={item.img}
                    heading={item.name}
                    subCategory={item.subCategory}
                    status={item.status}
                    openEditModal={openEditModal}
                    openDeleteModal={openDeleteModal}
                    data={item}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.mainContainer}>
              <img src="/illustration.png" />
              <h3 className={styles.create} onClick={openModal}>
                Create First Category
              </h3>
              <p className={styles.noCategoryText}>
                No category is created yet!
              </p>
            </div>
          )}
        </>
      ) : (
        <CategoriesRequestList />
      )}

      <AddNewCategory onClose={closeModal} open={isModalOpen} />
      <EditCategory
        onCloseModal={closeEditModal}
        open={isEditModalOpen}
        data={data}
      />
      <DeleteCategory
        heading={"Delete Category"}
        closeModal={closeDeleteModal}
        open={isDeleteModalOpen}
        data={data}
      />
    </div>
  );
};

export default Categories;
