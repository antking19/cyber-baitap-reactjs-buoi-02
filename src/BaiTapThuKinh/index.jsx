import "./index.scss";
import dataGlasses from "./dataGlasses.json";
import { useState } from "react";

export default function BaiTapThuKinh() {
    const [glasses, setGlasses] = useState({
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    });

    const renderGlassesList = () => {
        return dataGlasses.map((data) => {
            return (
                <li
                    onClick={() => handleChangeGlasses(data)}
                    key={data.id}
                    className="w-32 mx-auto border border-solid border-black p-1 cursor-pointer"
                >
                    <img src={data.url} alt="" />
                </li>
            );
        });
    };

    const handleChangeGlasses = (newGlasses) => {
        setGlasses(newGlasses);
    };

    return (
        <div className="wrapper">
            <div className="wrapper__bg">
                <h1>TRY GLASSES APP ONLINE</h1>
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 mb-16">
                        <div className="model">
                            <div className="model__img">
                                <img src="./glassesImage/model.jpg" alt="" />
                                <img
                                    src={glasses.url}
                                    alt=""
                                    className="glasses"
                                />
                                <div className="model__info">
                                    <h3 className="model__name">
                                        {glasses.name}
                                    </h3>
                                    <p>{glasses.desc}</p>
                                </div>
                            </div>
                        </div>
                        <div className="model">
                            <img src="./glassesImage/model.jpg" alt="" />
                        </div>
                    </div>
                    <ul className="grid grid-cols-6 gap-y-7 glassesList mx-auto">
                        {renderGlassesList()}
                    </ul>
                </div>
            </div>
        </div>
    );
}
