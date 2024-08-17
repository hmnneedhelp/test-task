import { useEffect, useState } from "react";
import './Tree.style.scss'
import DescriptionIcon from "@mui/icons-material/Description";
import { useCreate } from "src/api/Rows";

const TreeNode = ({ node }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(node.rowName);
    const createRow = useCreate()

    const handleCreate = (id: number)=>{
        createRow.mutate(id)
    }

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: { target: { value: any; }; }) => {
        setInputValue(e.target.value);
    };

    const handleBlur = () => {
        setIsEditing(false);
        // Здесь можно добавить код для сохранения изменения, например, через API
        console.log(`Сохранено значение: ${inputValue}`);
    };
    return (
        <>
            <tr className='tree-row'>
                <td style={{ paddingLeft: `${node.level * 20}px` }} className="icon" onClick={()=>handleCreate(node.id)}><DescriptionIcon color="primary" /></td>
                <td onDoubleClick={handleDoubleClick}>
                    {isEditing ? (
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            autoFocus
                        />
                    ) : (
                        inputValue
                    )}
                    </td>
                <td>{node.salary}</td>
                <td>{node.equipmentCosts}</td>
                <td>{node.supportCosts}</td>
                <td>{node.estimatedProfit}</td>
                {/* Добавьте другие поля по необходимости */}
            </tr>
            {node.child && node.child.length > 0 && (
                node.child.map((childNode) => (
                    <TreeNode key={childNode.id} node={{ ...childNode, level: node.level + 1 }} />
                ))
            )}
        </>
    );
};

export default TreeNode;