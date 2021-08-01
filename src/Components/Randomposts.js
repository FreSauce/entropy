import { useEffect, useState } from "react";
import { getRandomPosts } from "../hooks/getRandomposts";
import { Card } from "react-bootstrap";
import img from "../assets/cat.png";
import { formatDistanceToNow } from "date-fns";

const RandomPosts = () => {
    
    
    const [docs, setDocs] = useState([]);
    useEffect(() => {
        getRandomPosts(10).then((data) => {
            console.log(data[0].createdAt.toDate());
            setDocs(data);
        });
    }, []);

    return (
        <div className="posts">
            {docs &&
                docs.map((doc) => (
                    <div className="card" key={doc.id}>
                        <div style={{display: "flex"}}>
                            <div id="userpfp">
                                <img src={img} />
                            </div>
                            <div id="userdate">
                            <div id="username">{doc.name}</div>
                            <div id="date">{formatDistanceToNow(doc.createdAt.toDate())}</div>
                            </div>
                        </div>
                        <div id="caption">{doc.title}</div>
                        <div id="media">
                            <img src={doc.url} alt="" />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default RandomPosts;
