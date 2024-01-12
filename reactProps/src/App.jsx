
import Student from './Student';

function App() {
  return(
    <>
<Student name="MOHAN" age={25} isStudent={true} />
<Student name="ANKIT" age={30} isStudent={false} />
<Student name="AMIT" age={23} isStudent={true} />
<Student name="ASHISH" age={20} isStudent={true} />
<Student />
</>
  );
}

export default App



// props =  read-only properties that are shared between components.
//                A parent component can send data to a child component.
//                key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"