import { useRows, useCreate } from "src/api/Rows";
import "./Main.style.scss";
import { useEffect, useState } from "react";
import TreeView from "../Tree/TreeView";

export default function Main() {
  const { data, error, isLoading } = useRows();
  
  const [datas, setData] = useState();

  useEffect(() => {
    if (data && data.length > 0) {
      setData(data[0]);
    }
  }, [data]);

  if (isLoading) return <div className="main">Loading...</div>;
  if (error) return <div className="main">Error: {error.message}</div>;
  console.log(datas)
  return (
    <div className="main">
      <div className="main-inner">
        {/* <div className="table">
          <div className="header">
            <p>Уровень</p>
            <p className="second-col">Название работ</p>
            <p>Основная з/п</p>
            <p>Обородувание</p>
            <p>Накладные расходы</p>
            <p>Сметная прибыль</p>
          </div>
          <div className="row">
            <DescriptionIcon
              color="primary"
              className="icon"
              onClick={() => console.log("click")}
            />
            <input className="second-col" />
            <input />
            <input />
            <input />
            <input />
          </div>
          {datas ? (
            <>
              <div className="row">
                <DescriptionIcon
                  color="primary"
                  className="icon"
                  onClick={() => console.log("click")}
                />
                <div>{datas.rowName}</div>
                <div>{datas.salary}</div>
                <div>{datas.equipmentCosts}</div>
                <div>{datas.mimExploitation}</div>
                <div>{datas.estimatedProfit}</div>
              </div>
              {datas.child &&
                datas.child.map((childData, index) => (
                  <div className="row children" key={index}>
                    <DescriptionIcon
                      color="primary"
                      className="icon "
                      onClick={() => handleCreate(childData.id)}
                    />
                    <div onDoubleClick={()=>console.log('double click')}>{childData.rowName}</div>
                    <div>{childData.salary}</div>
                    <div>{childData.equipmentCosts}</div>
                    <div>{childData.mimExploitation}</div>
                    <div>{childData.estimatedProfit}</div>
                  </div>
                ))}
            </>
          ) : null}
        </div> */}
        <TreeView data={datas}/>
      </div>
    </div>
  );
}
