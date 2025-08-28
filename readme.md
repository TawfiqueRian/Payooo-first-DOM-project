## Questions & Answers

**Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**  
Ans:  
    getElementById = selects the single elemment of the given id.  
    getElementsByClassName = selects all the element of the given class name.  
    querySelector = selects the first element of the given class name or tag name or id name.  
    querySelectorAll = selects all the elements of the given class name or tag name or id name.  

---

**Q2: How do you create and insert a new element into the DOM?**  
Ans:  
    step-1: Creating a new elemnt:  
            const newDiv = document.createElement('div');  
            newDiv.innerHTML = `  
                <p>My name is Rian</p>  
            `  
    step-2: Find the parent node:  
            const parentNode = document.getElementById('container');  

    step-3: Append the child node  
            parentNode.appendChild(newDiv);  

---

**Q3: What is Event Bubbling and how does it work?**  
Ans:  
    Event bubbling means the event starts at the target element and moves upward in the DOM tree through the parent nodes.  
    It first runs the target element, then moves up to its parent, then to the parent's parent and so on, until it reaches the document.  

---

**Q4: What is Event Delegation in JavaScript? Why is it useful?**  
Ans:  
    Event Delegation in JavaScript means using one parents's event listener to manage all its children's events via bubbling.  
    It is useful because it helps a developer by using fewer event listeners that ensures better memory and speed, by dynamic elements and also overall cleaner code.  

---

**Q5: What is the difference between preventDefault() and stopPropagation() methods?**  
Ans:   
    preventDefault() = stops the default behavior or system of an event from happening.  
    stopPropagation() = stops the event from bubbling up.  