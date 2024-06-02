import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../images/logo.png'
import HeaderTop from '../headertop/HeaderTop';


export default memo(function Header() {
    const [data, setData] = useState([]);
    const [navShrink, setNavShrink] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const location = useLocation();

    // Redux dan wishes va carts holatini olish
    const wishes = useSelector((state) => state.wishlist.value);
    const carts = useSelector((state) => state.cart.value);

    useEffect(() => {
        axios
            .get("https://dummyjson.com/products")
            .then(res => setData(res.data.products))
            .catch(err => console.log(err));
    }, []);

    let handleSearch = (data) => {
        return data?.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase().trim()));
    }

    const handleNavShrink = () => {
        if (window.scrollY > 0) {
            setNavShrink(true);
        } else {
            setNavShrink(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleNavShrink);
        return () => {
            window.removeEventListener('scroll', handleNavShrink);
        };
    }, []);

    useEffect(() => {
        setSearchValue("");
    }, [location]);

    return (
        <>
            <HeaderTop />
            <header style={search ? { top: "48px" } : { top: "0" }} className={`header ${navShrink ? "nav__shrink" : ""}`} id='header'>
                <nav className="nav container">
                    <NavLink to={"/"} >
                        <img className="nav__logo" src={logo} alt="" />
                    </NavLink>
                    <div className="nav__actions">
                        <button className='nav__actions__button'>
                            <NavLink to={"#"} className="nav__actions__button">
                                <SubscriptionsOutlinedIcon className='nav__icon' />
                                <p>Katalog</p>
                            </NavLink>
                        </button>
                        <div className='nav__search__box'>
                            <input
                                type="search"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                className="nav__search__input"
                                placeholder="hasbro"
                            />
                            <button className='nav__input__button'>
                                <SearchOutlinedIcon />
                            </button>
                            <ul className='serch__const'>
                                {
                                    searchValue.trim() ?
                                        handleSearch(data).length ?
                                            handleSearch(data)?.map(product => (
                                                <div className="serch__const__div" key={product.id}>
                                                    <Link to={`/single/${product.id}`}>
                                                        <h4 className='serch__const__div__h4'>{product.title}</h4>
                                                    </Link>
                                                    <img className='serch__const__div__img' src={product.thumbnail} alt={product.title} />
                                                </div>
                                            ))
                                            :
                                            <p className='empty'>Malumot topilmad</p>
                                        :
                                        <></>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="nav__right">
                        <button className='nav__button'>
                            <NavLink to={"/admin"} className="nav__wishlist__link">
                                <PersonOutlineOutlinedIcon className='nav__icon' />
                                <p>Kirish</p>
                            </NavLink>
                        </button>
                        <button className='nav__button'>
                            <NavLink to="/wishlist" className="nav__wishlist__link">
                                <FavoriteBorderOutlinedIcon className='nav__icon' />
                                {wishes.length > 0 ? (
                                    <sup>
                                        <span className='sup__p'>{wishes.length}</span>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                                <p>Saralangan</p>
                            </NavLink>
                        </button>
                        <button className='nav__button'>
                            <NavLink to="/cart" className="nav__cart__link">
                                <ShoppingBagOutlinedIcon className='nav__icon' />
                                {carts.length > 0 ? (
                                    <sup>
                                        <span className='sup__p'>{carts.length}</span>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                                <p>Savat</p>
                            </NavLink>
                        </button>
                    </div>
                </nav>
            </header >
        </>
    );
}
)