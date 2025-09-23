import PropTypes from 'prop-types'

const List = (props) => {
    /*
    const fruit=[
                {id:1, name: "Apple",calories:95},
                {id:2, name:"Banana",calories:45}, 
                {id:3, name:"Orange",calories:105}, 
                {id:4, name:"Pineapple",calories:159},
                {id:5, name:"Coconut",calories:37}
            ]*/
    //fruit.sort((a,b)=>a.name.localeCompare(b.name)); alphabatical order
    //fruit.sort((a,b)=>b.name.localeCompare(a.name)); reverse alphabatical order
    //fruit.sort((a,b)=>a.calories-b.calories); //Acending order of calories
    //fruit.sort((a,b)=>b.calories-a.calories); //Decending order of calories  
    
    //const lowCalFruit=fruit.filter(fruit=> fruit.calories<100);
    //const highCalFruit=fruit.filter(fruit=> fruit.calories>100);
    const category=props.category
    const itemList=props.items
    const listItem=itemList.map(item => <li key={item.id}>
                                {item.name}: &nbsp;
                                <b>{item.calories}kcal</b>
                                </li>)
    
  return (

    <div className='main'>
        <h3 className='cat'>{category}</h3>
        <ol className='names'>{listItem}</ol>
    </div>
    
  )
}
List.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number,
    }))
}
List.defaultProps={
    category:"Category",
    items:[],
}


export default List
