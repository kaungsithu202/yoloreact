import React from 'react'

const SearchInput = () => {
  return (
     <div className="p-1 bg-white  shadow-sm mt-3">
            <div className="input-group">
              <input type="search" placeholder="Search..." aria-describedby="button-addon1" className="form-control border-0 bg-light" />
             
              
              <div className="input-group-append">
                <button id="button-addon1" type="submit" className="btn btn-link text-dark"><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
  )
}

export default SearchInput;