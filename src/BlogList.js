import { Link } from "react-router-dom";
import Aos  from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogList = ({blogs,title}) => {

    useEffect(() => {
        Aos.init({ duration: 1250});
    }, []);
    

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>

             {blogs.map((blog) => (
            <div data-aos="fade-up" className = "blog-preview" key = {blog.id}>
                <Link to = {`/blogs/${blog.id}`}>
                <h1>{ blog.id }</h1>
                <h2>{ blog.title }</h2>
                <p>Written by {blog.author}</p>
                </Link>
                
            </div>
            ))}
            
        </div>
     );
}
 
export default BlogList ;