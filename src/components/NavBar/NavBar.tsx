import MiddleNav from './MiddleNav';
import BottomNav from './BottomNav';

export default function NavBar() {
    return (
        <>
            <header className="w-[100%]">
                <div className="lg:block"> 
                    <MiddleNav />
                </div>
                <BottomNav />
            </header>        
        </>
    );
}