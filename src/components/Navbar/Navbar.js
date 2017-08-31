import React, {Component} from "react";
import './Navbar.css';

const Navbar = () => 
	   { return (
	       <div className="Navbar">
		        <div className="Navbar-header">
		          <h2>New York Times Article Scrubber</h2>
		        </div>
		        <p className="Navbar-intro">
		        </p>
		     
		    </div>
     
	    );

	// componentDidMount: function() {
	//     window.addEventListener('scroll', this.handleScroll);
	// },

	// componentWillUnmount: function() {
	//     window.removeEventListener('scroll', this.handleScroll);
	// },

	// handleScroll: function(event) {
	//     let scrollTop = event.srcElement.body.scrollTop,
	//         itemTranslate = Math.min(0, scrollTop/3 - 60);

	//     this.setState({
	//       transform: itemTranslate
	//     });
	// },

	// render() {
	//   // function() {
	//   //   let style = { transform: 'translateY(0px)' };

	//   //   window.addEventListener('scroll', (event) => {
	//   //     let scrollTop = event.srcElement.body.scrollTop,
	//   //         itemTranslate = Math.min(0, scrollTop/3 - 60);

	//   //     style.transform = 'translateY(' + itemTranslate + 'px)');
	//   //   });

	//     // return (
	//     //    <div className="Navbar">
	// 	   //      <div className="Navbar-header">
	// 	   //        <h2>New York Times Article Scrubber</h2>
	// 	   //      </div>
	// 	   //      <p className="Navbar-intro">
	// 	   //      </p>
		     
	// 	   //  </div>
     
	//     // );
	//   // }
	// }
};


export default Navbar;