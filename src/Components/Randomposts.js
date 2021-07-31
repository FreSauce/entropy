import { useEffect, useState } from "react";
import { getRandomPosts } from "../hooks/getRandomposts";
import {Card} from "react-bootstrap";

const RandomPosts = () => {
    const [docs, setDocs] = useState([]);
    useEffect(() => {
    getRandomPosts(10).then(
        (data) => { 
            console.log(data);
            setDocs(data);
        }
    );
    }, []);

    return (
        <>
            <div className="userposts">
                {docs &&
                    docs.map((doc) => (
                        <div className="userpost" key={doc.id}>
                            <Card>
                                <Card.Title>{doc.title}</Card.Title>
                                <Card.Body>
                                    <img className="postimg" src={doc.url} />
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default RandomPosts;
