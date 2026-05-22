const executiveMetrics = [
    { label: "Pilot Sites", value: "2", detail: "Sauce And Spoon North + Downtown" },
    { label: "Readiness Score", value: "82%", detail: "Ready with POS and training watch items" },
    { label: "Primary Goal", value: "30m", detail: "Target table turn time reduction by end of Q2" },
    { label: "Revenue Target", value: "+15%", detail: "Daily visitor lift with improved order flow" },
    { label: "Margin Goal", value: "+10%", detail: "Operational optimization and upsell support" },
    { label: "Avg Check", value: "$75", detail: "Target increase from $65 average check" }
];

const locations = [
    {
        name: "Sauce And Spoon North",
        status: "On Track",
        readiness: 86,
        summary: "Pilot focus includes stronger appetizer performance, service-flow improvement, and staff readiness confirmation.",
        blockers: "Manager training coverage and final support handoff.",
        tags: ["Appetizer Upsell", "Training Review", "Support Owner"]
    },
    {
        name: "Sauce And Spoon Downtown",
        status: "Watch",
        readiness: 78,
        summary: "Pilot focus includes guest-volume efficiency, payment speed, and higher upsell opportunities during peak periods.",
        blockers: "POS workflow validation and connectivity review.",
        tags: ["POS Validation", "Peak Traffic", "Connectivity"]
    }
];

const timeline = [
    {
        step: "01",
        title: "Tablet Package Selected",
        status: "Complete",
        tone: "complete",
        detail: "Selection and configuration requirements are defined for pilot dining areas."
    },
    {
        step: "02",
        title: "POS Integration Mapped",
        status: "Current",
        tone: "current",
        detail: "Integration workflow is mapped and needs final store validation before expansion."
    },
    {
        step: "03",
        title: "Staff Training Prepared",
        status: "Current",
        tone: "current",
        detail: "Training plan, escalation procedures, and service-flow changes are being confirmed."
    },
    {
        step: "04",
        title: "Leadership Review",
        status: "Pending",
        tone: "pending",
        detail: "KPI baselines, risk notes, and readiness results will support the pilot review."
    }
];

const kpis = [
    { title: "Table Turn Time", target: "-30 min", text: "Target reduction by the end of Q2 through streamlined ordering and payment." },
    { title: "Food Waste Reduction", target: "Order Errors", text: "Reduce waste caused by erroneous orders and improve order accuracy." },
    { title: "Customer Satisfaction", target: "90%", text: "Improve satisfaction with the ordering process through faster service." },
    { title: "Daily Visitors", target: "+15%", text: "Increase guest count through faster table flow and smoother payment." },
    { title: "Profit Margin", target: "+10%", text: "Improve margin through operational optimization and digital upsell prompts." },
    { title: "Average Check Amount", target: "$65 to $75", text: "Increase check size with menu prompts and stronger appetizer performance." }
];

const risks = [
    {
        title: "Hardware And Software Costs",
        severity: "medium",
        text: "Initial investment, integration work, staff training, and ongoing support affect cost control.",
        action: "Keep pilot scope tight and report cost variance before wider rollout."
    },
    {
        title: "Adoption Risk",
        severity: "medium",
        text: "Staff and customer adoption could slow results if the rollout is not well supported.",
        action: "Confirm floor coaching, quick-reference materials, and shift manager ownership."
    },
    {
        title: "Integration Issues",
        severity: "high",
        text: "POS and tablet workflow mismatches may disrupt service if not tested carefully.",
        action: "Complete validation scripts for ordering, payment, refunds, and escalation paths."
    },
    {
        title: "Operational Disruption",
        severity: "medium",
        text: "Pilot rollout could impact service speed early if escalation and training plans are weak.",
        action: "Stage launch windows around lower-volume periods and assign support coverage."
    }
];

const training = [
    {
        title: "Technology And Integration",
        text: "Prepare the store technology path before pilot launch.",
        items: [
            "Tablet package selected",
            "POS integration mapped",
            "Connectivity requirements reviewed",
            "Pilot deployment workflow defined"
        ]
    },
    {
        title: "Operations And Training",
        text: "Make the new service model clear to floor teams.",
        items: [
            "Staff training plan prepared",
            "Service flow changes documented",
            "Support escalation process defined",
            "Pilot monitoring owners assigned"
        ]
    },
    {
        title: "Business Oversight",
        text: "Give leadership the information needed for rollout decisions.",
        items: [
            "KPI baselines captured",
            "Revenue goals approved",
            "Food waste tracking method confirmed",
            "Leadership review schedule set"
        ]
    }
];

const inScope = [
    "Tablet implementation in designated areas",
    "Selection and configuration of tablet packages",
    "Training program development for staff",
    "Integration with existing restaurant systems"
];

const outScope = [
    "Expansion beyond designated pilot areas",
    "Physical restaurant layout redesign",
    "Customization beyond required integrations"
];

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function renderExecutiveMetrics() {
    const container = document.getElementById("executiveMetrics");
    container.innerHTML = executiveMetrics.map(metric => `
        <article class="metric-card">
            <span class="card-label">${metric.label}</span>
            <strong>${metric.value}</strong>
            <p>${metric.detail}</p>
        </article>
    `).join("");
}

function renderLocations() {
    const container = document.getElementById("locationGrid");
    container.innerHTML = locations.map(location => `
        <article class="location-card">
            <div class="location-card-header">
                <div>
                    <span class="card-label">${location.status}</span>
                    <h3>${location.name}</h3>
                </div>
                <span class="readiness-value">${location.readiness}%</span>
            </div>
            <div class="progress-track" aria-label="${location.name} readiness ${location.readiness} percent">
                <span style="width: ${location.readiness}%"></span>
            </div>
            <p>${location.summary}</p>
            <p><strong>Open watch item:</strong> ${location.blockers}</p>
            <div class="tag-row">
                ${location.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
            </div>
        </article>
    `).join("");
}

function renderTimeline() {
    const container = document.getElementById("timelineGrid");
    container.innerHTML = timeline.map(item => `
        <article class="timeline-card ${item.tone}">
            <div class="timeline-card-header">
                <span class="timeline-step">Step ${item.step}</span>
                <span class="severity ${item.tone === "pending" ? "low" : item.tone === "current" ? "medium" : "low"}">${item.status}</span>
            </div>
            <h3>${item.title}</h3>
            <p>${item.detail}</p>
        </article>
    `).join("");
}

function renderKpis() {
    const container = document.getElementById("kpiGrid");
    container.innerHTML = kpis.map(kpi => `
        <article class="kpi-card">
            <span class="card-label">${kpi.title}</span>
            <strong class="kpi-target">${kpi.target}</strong>
            <p>${kpi.text}</p>
        </article>
    `).join("");
}

function renderRisks() {
    const container = document.getElementById("riskGrid");
    container.innerHTML = risks.map(risk => `
        <article class="risk-card">
            <div class="risk-card-header">
                <h3>${risk.title}</h3>
                <span class="severity ${risk.severity}">${risk.severity}</span>
            </div>
            <p>${risk.text}</p>
            <p><strong>Control:</strong> ${risk.action}</p>
        </article>
    `).join("");

    const topRiskList = document.getElementById("topRiskList");
    topRiskList.innerHTML = risks.slice(0, 3).map(risk => `<li>${risk.title}</li>`).join("");
}

function renderTraining() {
    const container = document.getElementById("trainingGrid");
    container.innerHTML = training.map(group => `
        <article class="check-card">
            <h3>${group.title}</h3>
            <p>${group.text}</p>
            <ul class="check-list">
                ${group.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </article>
    `).join("");
}

function renderList(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function bindDemoActions() {
    const notice = document.getElementById("demoNotice");
    document.querySelectorAll("[data-demo-action]").forEach(button => {
        button.addEventListener("click", () => {
            const action = button.getAttribute("data-demo-action");
            const message = `Demo-only: "${action}" is a static portfolio action. No file was exported and no external system was contacted.`;

            if (notice) {
                notice.textContent = message;
            }

            button.setAttribute("aria-label", message);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderExecutiveMetrics();
    renderLocations();
    renderTimeline();
    renderKpis();
    renderRisks();
    renderTraining();
    renderList("inScopeList", inScope);
    renderList("outScopeList", outScope);
    bindDemoActions();
});
