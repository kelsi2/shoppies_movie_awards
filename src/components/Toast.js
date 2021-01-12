import {useState, useEffect} from 'react';

export default function Toast(props) {
  const {toastList, autoDelete} = props;
  const [list, setList] = useState(toastList);

  const deleteToast = id => {
    const index = list.findIndex(e => e.id === id);
    list.splice(index, 1);

    const toastListItem = toastList.findIndex(e => e.id === id);
    toastList.splice(toastListItem, 1);

    setList([...list]);
  }

  useEffect(() => {
    setList(toastList);
  }, [toastList, list]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <div className="notification-container">
        {list.map((toast, index) => 
          <div key={index} className="notification toast" style={{ backgroundColor: toast.backgroundColor}}>

        <button onClick={() => deleteToast(toast.id)}>
          X
        </button>
        <div className="notification-image">
          <img src={toast.icon} alt="" />
        </div>
        <div>
          <p className="notification-title">{toast.title}</p>
          <p className="notification-message">{toast.description}</p>
        </div>
        </div>
      )}
      </div>
    </>
  )
}