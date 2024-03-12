import style from './Form.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon } from '../../redux/actions';
import validation from '../utils/validations';


const Form = () => {
    const dispatch = useDispatch();
    const { types } = useSelector(state => state);

    const [created, setCreated] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    
    const [form, setForm] = React.useState({
        name: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: []
    });
    
    
    const [errors, setErrors] = React.useState({});
    const [completeFields, setCompleteFields] = React.useState(false);

    const handleChange = (event) => {
        if (event.target.name === "types") {
            setForm({
                ...form,
                types: [...form.types, event.target.value]
            })
            return 
        }
        setForm({
            ...form,
            [event.target.name] : event.target.value
        })

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(createPokemon(form))
        .then(() => {
            setCreated(true);
            setShowAlert(true);
            setForm({            //Limpio  los campos para crear nuevo Pokemon
                name: "",
                life: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: "",
                image: "",
                types: []
            });
        })
        .catch((error) => {
            console.error(error);
        })

    };

    React.useEffect(() => {
        if (form.name !== "" || form.life !== "" || form.attack !== "" || form.defense !== "" || form.speed !== "" ||
        form.height !== "" || form.weight !== "" || form.image !== "" ) {
            const formValidated = validation(form);
            setErrors(formValidated) //Le doy tiempo al estado que cambie y después valide y el condicional es para que no tire los errores cuando está vacío
        }
    }, [form])

    const allCompleteFields = () => {
        const fields = Object.values(form);
        return fields.every((field) => field !== "" && field !== null);
    };

    React.useEffect(() => {
        setCompleteFields(allCompleteFields());
    }, [form]);

    
    return (
        <form className={style.form} onSubmit={handleSubmit}>
           <div>
            <h1>CREATE YOUR POKEMON</h1>
           <div>
             <label htmlFor="name">Name: </label>
             <input className={style.formInput} onChange={handleChange} type="text" name="name" value={form.name}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.name ? <span>{errors.name}</span> : null}
           </div>

           <div>
             <label htmlFor="life">Life: </label>
             <input className={style.formInput} onChange={handleChange} type="number" name="life" value={form.life}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.life ? <span>{errors.life}</span> : null}
           </div>
            
           <div>
             <label htmlFor="attack">Attack: </label>
             <input className={style.formInput} onChange={handleChange} type="number" name="attack" value={form.attack}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.attack ? <span>{errors.attack}</span> : null}
           </div>
            
            <div>
             <label htmlFor="defense">Defense: </label>
             <input className={style.formInput} onChange={handleChange} type="number" name= "defense" value={form.defense}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.defense ? <span>{errors.defense}</span> : null}
            </div>
            
            <div>
             <label htmlFor="speed">Speed: </label>
             <input className={style.formInput} onChange={handleChange} type="number" name="speed" value={form.speed}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.speed ? <span>{errors.speed}</span> : null}
            </div>
            
            <div>
              <label htmlFor="height">Height: </label>
              <input className={style.formInput} onChange={handleChange} type="number" name="height" value={form.height}></input>
              
              <hr style={{ borderStyle: "none"}}/>
              {errors.height ? <span>{errors.height}</span> : null}
            </div>

            <div>
             <label htmlFor="weight">Weight: </label>
             <input className={style.formInput} onChange={handleChange} type="number" name="weight" value={form.weight}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.weight ? <span>{errors.weight}</span> : null}
            </div>
            
            <div>
             <label htmlFor="image">Image: </label>
             <input className={style.formInput} onChange={handleChange} type="url" name="image" value={form.images}></input>
             
             <hr style={{ borderStyle: "none"}}/>
             {errors.image ? <span>{errors.image}</span> : null}
            </div>

            <div>
                <div>
                 <label htmlFor="types">Types: </label>
                <select onChange={handleChange} id ="types" name="types" value={form.types}>
                 <option value="">Select the types</option>
                  {types.map((type) => (
                 <option key={type.id} value={type.id}>{type.name}</option>
                  ))}
               </select>
               </div>
             
            <hr style={{ borderStyle: "none"}}/>
            </div>
            
            <div>
             <button className={style.formButton} type="submit" >
                Create Pokemon
             </button>
            </div>

            {showAlert && (
                <div >
                    <p>Pokemon successfully created</p>
                </div>
            )}
            
            <div>
             <button className={style.formButton}>
                <Link  to="/home">Back to home</Link>
             </button>
            </div>
           </div>

        </form>
    )
}

export default Form;