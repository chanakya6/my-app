import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "./TodoList.css";

const TodoList = () => {
    const [enterList, setEnterList] = useState('');
    const [storeList, setStoreList] = useState([]);

    const onClickButton = () => {
        if (enterList.trim() === '') {
            alert("Please enter the 'Task'");
            return;
        }
        setStoreList((previousItems) => {
            return [...previousItems, enterList]
        });
        setEnterList('');
    };

    const onSelect = (id) => {
        setStoreList((previousItems) => {
            return previousItems.filter((value, index) => {
                return index !== id;
            });
        });
    };
    return (
        <div className='background'>
            <div className='App_body'>
                <p>ToDo List</p>
                <div className='App_input'>
                    <input type='text'
                        title='Task should be enter'
                        placeholder='Enter the task'
                        value={enterList}
                        onChange={(event) => setEnterList(event.target.value)}
                    />
                    <button onClick={onClickButton}>Add</button>
                </div>
                <div className='App_list'>
                    <ul>
                        {
                            storeList.map((value, index) => {
                                return (
                                    <div className='App_listEach' key={index}>
                                        <div className='App_listEach1'>
                                            <FontAwesomeIcon icon={faCheck} />
                                        </div>
                                        <div className='App_listEach2'>
                                            <div>
                                                <li>{value}</li>
                                            </div>
                                            <div>
                                                <FontAwesomeIcon className='Icons'
                                                    icon={faTrash}
                                                    onClick={() => onSelect(index)} />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TodoList;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import "./TodoList.css";

// const TodoList = () => {
//     const [enterList, setEnterList] = useState('');
//     const [storeList, setStoreList] = useState([]);

//     const onClickButton = () => {
//         setStoreList((previousItems) => [...previousItems, { text: enterList, isCompleted: false }]);
//         setEnterList('');
//     };

//     const onToggleComplete = (index) => {
//         setStoreList((previousItems) => {
//             const updatedList = [...previousItems];
//             updatedList[index].isCompleted = !updatedList[index].isCompleted;
//             return updatedList;
//         });
//     };

//     const onSelect = (index) => {
//         setStoreList((previousItems) => previousItems.filter((_, i) => i !== index));
//     };

//     return (
//         <div className='background'>
//             <div className='App_body'>
//                 <p>ToDo List</p>
//                 <div className='App_input'>
//                     <input
//                         type='text'
//                         placeholder='Enter the text'
//                         value={enterList}
//                         onChange={(event) => setEnterList(event.target.value)}
//                     />
//                     <button onClick={onClickButton}>Add</button>
//                 </div>
//                 <div className='App_list'>
//                     <ul>
//                         {storeList.map((item, index) => (
//                             <div className='App_listEach' key={index}>
//                                 <li
//                                     style={{ textDecoration: item.isCompleted ? 'line-through' : 'none' }}
//                                 >
//                                     {item.text}
//                                 </li>
//                                 <div>
//                                     <button onClick={() => onToggleComplete(index)}>
//                                         {item.isCompleted ? 'Undo' : 'Complete'}
//                                     </button>
//                                     <FontAwesomeIcon
//                                         className='Icons'
//                                         icon={faTrash}
//                                         onClick={() => onSelect(index)}
//                                     />
//                                 </div>
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TodoList;
