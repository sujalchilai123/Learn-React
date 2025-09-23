
import List from './List.jsx'

function App() {
      const fruit=[
                {id:1, name: "Apple",calories:95},
                {id:2, name:"Banana",calories:45}, 
                {id:3, name:"Orange",calories:105}, 
                {id:4, name:"Pineapple",calories:159},
                {id:5, name:"Coconut",calories:37}
            ]
      const vegetables=[
                {id:6, name: "Potatoes",calories:115},
                {id:7, name:"Celery",calories:15}, 
                {id:8, name:"Carrots",calories:25}, 
                {id:9, name:"Corn",calories:63},
                {id:10, name:"Broccoli",calories:50}
            ]

  return (
    <>
      {fruit.length> 0 && <List items={fruit} category="Fruits"></List>}
      {vegetables.length>0 && <List items={vegetables} category="Vegetables"></List>}
    </>
  )
}

export default App
