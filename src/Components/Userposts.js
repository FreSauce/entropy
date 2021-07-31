import useUserposts from '../hooks/useUserposts'
import {useAuth} from '../contexts/AuthContext'
import { Card } from 'react-bootstrap';

const Userposts = () => {
    const {currentUser} = useAuth()
    const {docs} = useUserposts(currentUser.uid);
    console.log(docs);
    return ( 
        <>
            <div className="userposts">
                {docs && docs.map(doc => (
                    <div className="userpost" key={doc.id}>
                        <Card>
                            <Card.Title>
                                {doc.title}
                            </Card.Title>
                            <Card.Body>
                                <img className="postimg" src={doc.url} />
                                
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

        </>
     );
}
 
export default Userposts;