import React from "react";
import { useState } from "react";


const Additem = ({ data, setIsAdding }) => {
  

  const [brandname, setbrandname] = useState("");
  const [modelNumber, setmodelNumber] = useState("");
  const [ram, setram] = useState("");
  const [internalStorage, setinternalStorage] = useState("");
  const [screenSize, setscreenSize] = useState("");
  const [camera, setcamera] = useState("");
  const [address, setaddress] = useState("");
  const [price, setprice] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const id = data.length + 1;
    const rating = 4;
    const qnty = 0;
    const somedata = " order by more than 1000+ people ";
    const imgdata = "/image/img1.jpg ";

    const setdata = {
      id,
      brandname,
      modelNumber,
      ram,
      internalStorage,
      screenSize,
      camera,
      imgdata,
      address,
      somedata,
      price,
      rating,
      qnty,
    };
    data.push(setdata);   
    setIsAdding(false);


    
    
  };
  

  return (
    <>
      <div className="container border border-primary mt-2 mb-2">
        <form className="form-group m-4" onSubmit={handleAdd}>
          <h1 className="text-center mt-4 bg-primary text-light">Add Phone</h1>
          {/*1. label for Brand name */}
          <label htmlFor="BrandName" className="mt-2 mb-2">
            Brand Name
          </label>
          <input
            id="BrandName"
            type="text"
            className="form-control"
            name="brandname"
            value={brandname}
            onChange={(e) => setbrandname(e.target.value)}
          />

          {/*2. label for model name */}
          <label htmlFor="ModelNumber" className="mt-2 mb-2">
            Model Number
          </label>
          <input
            id="ModelNumber"
            type="text"
            className="form-control"
            name="ModelNumber"
            value={modelNumber}
            onChange={(e) => setmodelNumber(e.target.value)}
          />

          {/* 3 label for ram*/}
          <label htmlFor="ram" className="mt-2 mb-2">
            Ram
          </label>
          <input
            id="Ram"
            type="text"
            className="form-control"
            name="ram"
            value={ram}
            onChange={(e) => setram(e.target.value)}
          />

          {/*  4 label for internal Storage Number*/}
          <label htmlFor="storage" className="mt-2 mb-2">
            Internal Storage
          </label>
          <input
            id="InternalStorage"
            type="text"
            className="form-control"
            name="InternalStorage"
            value={internalStorage}
            onChange={(e) => setinternalStorage(e.target.value)}
          />

          {/* 5 label for screen size*/}
          <label htmlFor="screensize" className="mt-2 mb-2">
            Screen Size
          </label>
          <input
            id="screenSize"
            type="text"
            className="form-control"
            name="screenSize"
            value={screenSize}
            onChange={(e) => setscreenSize(e.target.value)}
          />

          {/* 6 label for Camera*/}
          <label htmlFor="camera" className="mt-2 mb-2">
            Camera
          </label>
          <input
            id="Camera"
            type="text"
            className="form-control"
            name="camera"
            value={camera}
            onChange={(e) => setcamera(e.target.value)}
          />
          {/* 7 label for address */}
          <label htmlFor="address" className="mt-2 mb-2">
            Address
          </label>
          <input
            id="address"
            type="text"
            className="form-control"
            name="address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          {/* 8 label for price */}
          <label htmlFor="price" className="mt-2 mb-2">
            price
          </label>
          <input
            id="price"
            type="text"
            className="form-control"
            name="price"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />

          <div style={{ marginTop: "30px" }}>
            <input
              type="submit"
              value="Add"
              className="btn btn-primary"
            />
            <input
              style={{ marginLeft: "12px" }}
              className="muted-button btn btn-primary"
              type="button"
              value="Cancel"
              onClick={() => setIsAdding(false)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Additem;
