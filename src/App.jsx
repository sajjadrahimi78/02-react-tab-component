import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  // activeTab => update UI
  // update tab style
  // update indicator => when btn is active
  // update content

  // state / react hooks (useState , useEffect , ...)
  const [activeTab, setActiveTab] = useState(1); // [state , func seter => setStart => update func]
  const [isOpen, setIsOpen] = useState(true);
  const [count, setCount] = useState(0);

  const handleActiveTab = (id) => {
    // console.log("clicked",{id});
    setActiveTab(id);

    //وقتی که مقدار قبلی ما برای آپدیت کردن مهم باشه باید از روش کالبک متد استفاده کنیم ن این روش
    // setCount(count + 1); //0 + 1 => 1
    // setCount(count + 1); //0 + 1 => 1

    // updating state based on prev state value : callback method!
    setCount((c) => c + 1); //0 + 1 => 1
    setCount((c) => c + 1); //1 + 1 => 2
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleOpen} className="close-btn">
        ❌
      </button>
      {isOpen ? (
        <div className="tab">
          <div className="tab__header">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "active" : ""}
                //  onClick={() => alert("mouse entered.")} // couse alert is a function And to avoid calling the default function, we write it as an arrow function
                onClick={() => handleActiveTab(tab.id)}
              >
                <span>{tab.title}</span>
                <span className="tab-indicator"></span>
              </button>
            ))}
          </div>
          <div className="tab__content">
            {tabData[activeTab - 1].content} - {count}
          </div>
        </div>
      ) : (
        <p className="tab__content">Closed ...</p>
      )}
    </div>
  );
}

export default App;
