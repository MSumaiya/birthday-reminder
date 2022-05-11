import React from 'react';

const List = ({people}) => {
  //const {id, name, age, image}= people;

  return (
    <>
    {
    people.map(person=> 
      <article key={person.id} className='person'>
        <img src={person.image} alt={person.name} />
        <div>
          <h4>{person.name}</h4>
          <p>{person.age} yrs</p>
         </div>
      </article>
    )
  }
    </>
  );
};

export default List;
