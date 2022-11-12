import styles from './Routes.module.scss'
import {addData, getData} from '../firebase/firestore'

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
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <button onClick={handleInsertOnclickEvent}>Insert</button>
        <button onClick={handleReadDataOnclickEvent}>ReadData</button>
      </header>
    </div>
  )
}

export default App
