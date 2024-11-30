// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get values from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display a confirmation message
    document.getElementById("formResponse").innerHTML = `
        <p>Thank you, ${name}! We have received your message.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;

    // Clear the form fields
    document.getElementById("contactForm").reset();
});

// KAILEL Family Tree - Updated without Joseph N Mwangi
const familyTree = {
    name: "KAILEL Family",
    children: [
        { 
            name: "Langat Gilbert (Group Admin)",
            children: [
                { name: "Family Member 1" },
                { name: "Family Member 2" }
            ]
        },
        { 
            name: "Family Member 3",
            children: [
                { name: "Child 1" },
                { name: "Child 2" }
            ]
        },
        { 
            name: "Family Member 4",
            children: []
        }
    ]
};

// Recursive function to display family tree
function createFamilyTree(member) {
    const div = document.createElement("div");
    div.classList.add("tree-node");
    div.innerHTML = `<strong>${member.name}</strong>`;

    if (member.children.length > 0) {
        const childrenDiv = document.createElement("div");
        childrenDiv.classList.add("children");
        member.children.forEach(child => {
            childrenDiv.appendChild(createFamilyTree(child));
        });
        div.appendChild(childrenDiv);
    }

    return div;
}

// Append the family tree to the tree container
document.getElementById("treeContainer").appendChild(createFamilyTree(familyTree));
