import React from 'react';
import { Oval } from 'react-loader-spinner';
import style from '../pagination/Pagination.module.css'
const Loader = () => {
    return (
        <div className={style.loadingNotFound}>
            <Oval
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
    )
}

export default Loader;