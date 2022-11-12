import styles from './Routes.module.scss'
import {addData, getData} from '../firebase/firestore'
import ModalPortal from "../components/portal";
import Modal from "../components/modal";
import {useState} from "react"

function App() {
  const handleInsertOnclickEvent =()=>{
    console.log("CLICK!!")
    const response = addData('users',{name:'lee'})
    console.log(response)
  }
  const handleReadDataOnclickEvent =()=>{
    console.log("CLICK!!")
    const response = getData('users','name','lee').then((res)=>{
      res.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    })
    console.log(response)
  } 
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <button onClick={handleInsertOnclickEvent}>Insert</button>
        <button onClick={handleReadDataOnclickEvent}>ReadData</button>
        <button onClick={handleModal}>open portal</button>
        <ModalPortal>
          {modalOn && <Modal onClose={handleModal} />}
        </ModalPortal>
      </header>
      
    </div>
  )
}

export default App
