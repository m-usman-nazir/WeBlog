import Aos  from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    useEffect(() => {
        Aos.init({ duration: 1250});
    }, []);

    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('Daniyal');
    const [ isPending, setIsPending ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div data-aos="fade-up" className="create">
            <h2>Add a New Blog</h2>

            <form onSubmit = { handleSubmit }>
                <label> Blog title: </label>
                <input type="text"
                required 
                value = { title }
                onChange = {(e) => setTitle(e.target.value)}
                />

                <label> Blog body: </label>
                <textarea
                    required
                    value = { body }
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>

                <label> Blog author</label>
                <select 
                    value = { author }
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Daniyal">Daniyal</option>
                    <option value="Wahab">Wahab</option>
                    <option value="Abdullah">Abdullah</option>
                    <option value="Ali">Ali</option>
                </select>
                
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}

            </form>

        </div>
     );
}
 
export default Create;