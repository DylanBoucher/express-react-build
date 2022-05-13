import React, { useState, } from 'react'
import { Link } from 'react-router-dom'

function People(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: '',
        image: '',
        title: '',
    })

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    // handle submit funcion for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createPeople(newForm)
        setNewForm({
            name: '',
            image: '',
            title: '',
        })
    }

    //loaded function
    const loaded = () => {
        return props.people.map((person) => ( // we have () instead of {} because there is no "return", if there was then it would use {}
            <div key={person._id} className="person">
                <Link to={`/people/${person._id}`}>{person.name}</Link>
                <img src={person.image} alt={person.name}/>
                <h3>{person.title}</h3>
            </div>
        ))
    }

    //loading function
    const loading = () => {
        return <h1>Loading...</h1>
    }

  return (
    <section>
           <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Person" />
            </form>
         {/* if props.people has a value render loaded() else render loading() */}
        {props.people ? loaded() : loading()}
    </section>
    
    )
}

export default People
