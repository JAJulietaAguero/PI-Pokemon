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
  color="rgba(75, 107, 156, 0.992)"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
        </div>
    )
}

export default Loader;