
import TreeNode from './TreeNode';

const TreeView = ({ data }) => {
    return (
        <table border={0} style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                    <th>Уровень</th>
                    <th>Наименование работ</th>
                    <th>Основная з/п</th>
                    <th>Обородувание</th>
                    <th>Накладные расходы</th>
                    <th>Сметная прибыль</th>
                    {/* Добавьте другие заголовки по необходимости */}
                </tr>
            </thead>
            <tbody>
                <TreeNode node={{ ...data, level: 0 }} />
            </tbody>
        </table>
    );
};

export default TreeView;