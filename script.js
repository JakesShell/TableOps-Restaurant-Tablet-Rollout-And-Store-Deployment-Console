const summaryItems = [
    { title: "Project Type", text: "Tablet Rollout Pilot" },
    { title: "Pilot Sites", text: "Sauce And Spoon North + Downtown" },
    { title: "Primary Goal", text: "Operational Efficiency And Revenue Lift" },
    { title: "Core Change", text: "Tabletop Ordering And Payment Workflow" }
];

const goals = [
    { title: "Reduce Table Turn Time", text: "Target a 30-minute reduction in table turn time through streamlined ordering and payment." },
    { title: "Minimize Food Waste", text: "Reduce waste caused by ordering mistakes and improve order accuracy." },
    { title: "Improve Customer Satisfaction", text: "Improve the ordering experience through faster and more interactive service." },
    { title: "Lift Revenue Metrics", text: "Increase daily guests, appetizer sales, average checks, and profit margins." }
];

const deliverables = [
    { title: "Tablet Rollout Pilot", text: "Deploy tablets within the designated pilot dining areas." },
    { title: "Staff Training Program", text: "Prepare restaurant staff for the new ordering workflow and support procedures." },
    { title: "POS Integration", text: "Connect the tablet workflow with the existing point-of-sale environment." },
    { title: "Documentation And Reporting", text: "Track rollout progress, outcomes, and executive reporting requirements." }
];

const inScope = [
    "Tablet Implementation In Designated Areas",
    "Selection And Configuration Of Tablet Packages",
    "Training Program Development For Staff",
    "Integration With Existing Restaurant Systems"
];

const outScope = [
    "Expansion Beyond Designated Pilot Areas",
    "Physical Restaurant Layout Redesign",
    "Customization Beyond Required Integrations"
];

const kpis = [
    { title: "Table Turn Time", text: "Target reduction of 30 minutes by the end of Q2." },
    { title: "Food Waste Reduction", text: "Target elimination of waste caused by erroneous orders." },
    { title: "Customer Satisfaction", text: "Target 90% improvement in satisfaction with the ordering process." },
    { title: "Daily Visitors", text: "Target 15% increase in guest count." },
    { title: "Profit Margin", text: "Target 10% improvement through operational optimization." },
    { title: "Average Check Amount", text: "Increase average check from $65 to $75." }
];

const locations = [
    { title: "Sauce And Spoon North", text: "Pilot focus includes stronger appetizer performance and service-flow improvement." },
    { title: "Sauce And Spoon Downtown", text: "Pilot focus includes guest-volume efficiency and higher upsell opportunities." }
];

const risks = [
    { title: "Hardware And Software Costs", text: "Initial investment, integration work, staff training, and ongoing support all affect cost control." },
    { title: "Adoption Risk", text: "Staff and customer adoption could slow results if the rollout is not well supported." },
    { title: "Integration Issues", text: "POS and tablet workflow mismatches may disrupt service if not tested carefully." },
    { title: "Operational Disruption", text: "Pilot rollout could impact service speed early if escalation and training plans are weak." }
];

const benefits = [
    { title: "Enhanced Customer Experience", text: "Interactive ordering can improve speed, clarity, and satisfaction." },
    { title: "Improved Efficiency", text: "Digital ordering can reduce wait times and service friction." },
    { title: "Upsell Opportunity", text: "Digital prompts can support higher-value orders and appetizer growth." },
    { title: "Better Data Collection", text: "Tablet usage can support future menu, marketing, and operations decisions." }
];

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function renderCards(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join("");
}

function renderList(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderCards("summaryGrid", summaryItems);
    renderCards("goalsGrid", goals);
    renderCards("deliverablesGrid", deliverables);
    renderCards("kpiGrid", kpis);
    renderCards("locationGrid", locations);
    renderCards("riskGrid", risks);
    renderCards("benefitsGrid", benefits);
    renderList("inScopeList", inScope);
    renderList("outScopeList", outScope);
});
