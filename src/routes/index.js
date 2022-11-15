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
import Button from '../components/button'

function App() {
  const [modalOn, setModalOn] = useState(false);
  const [list, setList] = useState([]);

  useEffect(()=>{
    handleReadDataOnclickEvent()
  },[]);

  const handleInsertOnclickEvent =()=>{
    console.log("CLICK!!")
    const timestampNow = new Date();
    const id = prompt('이름을 입력하세요.','홍길동')
    const type = prompt('형태를 입력하세요.(수입/지출)','지출')
    const amount = prompt('금액을 입력하세요.(숫자로만 입력하세요)', '50000')
    const description = prompt('설명을 입력하세요','정기 모임비')
    if (id && type && amount && description) {
      addData('users',{id, timestamp: timestampNow, type, amount, description})
      alert('입력 완료~!!')
      handleReadDataOnclickEvent()
    } else {
      console.log('handleInsertOnclickEvent')
    }
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
      list.sort((x, y)=> y['timestamp']-x['timestamp'])
      setList(list)
    })
    console.log('handleReadDataOnclickEvent')
  };
  
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <div className={styles.app}>
      <Header>
        <Button click_event={handleInsertOnclickEvent}>Insert</Button>
        <Button click_event={handleReadDataOnclickEvent}>ReadData</Button>
        <Button click_event={handleModal}>open portal</Button>
      </Header>
      <Main>
        <Ul>
          {list.map((item, index)=>{
            const key = index + "_item";
            const timestamp = new Date(item['timestamp']);
            const year = timestamp.getFullYear();
            const month = timestamp.getMonth();
            const date = timestamp.getDate();
            return(<Li key={key} data={item}>
                <div className={styles.date}>{`${String(year)}년 ${String(month)}월 ${String(date)}일`}</div>
                <div className={styles.list}>
                  <div>{item['id']}</div>
                  <div>{item['type']}</div>
                  <div>{item['amount']} 원</div>
                </div>
                <div className={styles.description}>{item['description']}</div>
              </Li>)
          })}
        </Ul>
        <ModalPortal>
          {modalOn && <Modal>
              <h1>짜잔</h1>
              <button onClick={handleModal}>close portal</button>
            </Modal>}
        </ModalPortal>
      </Main>
      <Footer>footer</Footer>
    </div>
  )
}

export default App
