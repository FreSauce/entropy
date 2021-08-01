import useUserposts from "../hooks/useUserposts";
import { useAuth } from "../contexts/AuthContext";
import img from "../assets/cat.png";

const Userposts = () => {
    const toDate = (timestamp) => {
        console.log(timestamp);
        var date = new Date(timestamp);
        
        let time = "Date: "+date.getDate()+
                  "/"+(date.getMonth()+1)+
                  "/"+date.getFullYear()+
                  " "+date.getHours()+
                  ":"+date.getMinutes()+
                  ":"+date.getSeconds()
        return time;
    }
    const { currentUser } = useAuth();
    const { docs } = useUserposts(currentUser.uid);
    console.log(docs);
    return (
        <>
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
                {docs.length == 0 && (
                    <div className="noposts">No Posts Found</div>
                )}
            </div>
        </>
    );
};

export default Userposts;
