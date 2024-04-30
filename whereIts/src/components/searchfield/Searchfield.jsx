import './searchfield.css'; 

function Searchfield() {
    return (
        <section className="form-container">
        <form>
          <div className="search-box">
            <input 
              type="text" 
              placeholder='' 
              aria-label='Sök' 
              className="search-icon" />
          </div>
        </form>
      </section>
      );
    }
    
    export default Searchfield;
