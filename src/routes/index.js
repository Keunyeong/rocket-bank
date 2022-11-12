import {useState, useEffect} from "react"
import styles from './Routes.module.scss'
import ModalPortal from "../components/portal";
import Modal from "../components/modal";
import {addData, getData} from '../firebase/firestore'
import Ul from '../components/ul'
import Li from '../components/li'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [list, setList] = useState([]);
  useEffect(()=>{
    handleReadDataOnclickEvent()
  },[]);
  const handleInsertOnclickEvent =()=>{
    console.log("CLICK!!")
    const timestampNow = new Date();
    const id = Math.random()
    const response = addData('users',{id, timestamp: timestampNow})
    console.log(response)
  };
  const handleReadDataOnclickEvent =()=>{
    getData('users').then((res)=>{
      const list = []
      res.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data()
        data['timestamp'] = Number(`${data['timestamp']['seconds']}${data['timestamp']['nanoseconds']}`.slice(0,13))
        list.push(data)
      });
      list.sort((x, y)=> x['timestamp'] - y['timestamp'])
      setList(list)
    })
  };
  
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div className={styles.app}>
      <Header>
        <button onClick={handleInsertOnclickEvent}>Insert</button>
        <button onClick={handleReadDataOnclickEvent}>ReadData</button>
        <button onClick={handleModal}>open portal</button>
      </Header>
      <Main className={styles.appHeader}>
        <Ul>
          {list.map((item, index)=>{
            const key = index + "_item";
            return(<Li key={key}>{`id:${item['id']}/date:${new Date(item['timestamp'])}`}</Li>)
          })}
        </Ul>
        <ModalPortal>
          {modalOn && <Modal onClose={handleModal} />}
        </ModalPortal>
      </Main>
      <Footer>footer</Footer>
    </div>
  )
}

export default App
