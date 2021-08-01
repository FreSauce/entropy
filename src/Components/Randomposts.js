import { useEffect, useState } from "react";
import { getRandomPosts } from "../hooks/getRandomposts";
import { Card } from "react-bootstrap";
import img from "../assets/cat.png";

const RandomPosts = () => {
    const toDate = (timestamp) => {
        var date = new Date(timestamp);

        let time =
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear() +
            " " +
            date.getHours() +
            ":" +
            date.getMinutes() +
            ":" +
            date.getSeconds();
        return time;
    };

    const [docs, setDocs] = useState([]);
    useEffect(() => {
        getRandomPosts(10).then((data) => {
            console.log(data);
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
                            <div id="date">{toDate(doc.createdAt.seconds)}</div>
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
