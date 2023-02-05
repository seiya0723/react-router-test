import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>

        <div>ここはホームです</div>

        <Link to={`/portfolio`}>ポートフォリオ</Link>
        <Link to={`/profile`}>プロフィール</Link>

        </>
    );
}



