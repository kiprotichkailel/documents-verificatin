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

// Simple Family Tree - Placeholder Example
const familyTree = {
    name: "KAILEL Family",
    children: [
        { name: "Joseph N Mwangi", children: [{ name: "Child 1" }, { name: "Child 2" }] },
        { name: "Family Member 2", children: [] }
    ]
};

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

document.getElementById("treeContainer").appendChild(createFamilyTree(familyTree));
