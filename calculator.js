// Get all the necessary DOM elements
const homeSizeInput = document.getElementById('homeSize');
const homeSizeValue = document.getElementById('homeSizeValue');
const residentsInput = document.getElementById('residents');
const residentsValue = document.getElementById('residentsValue');
const intensityInput = document.getElementById('intensity');
const intensityValue = document.getElementById('intensityValue');
const savingsAmount = document.getElementById('savingsAmount');

// Constants for calculations
const NUCLEAR_RATE = 0.099; // $0.099 per kWh
const TRADITIONAL_RATE = 0.25; // $0.25 per kWh
const BASE_USAGE_PER_SQFT = 0.5; // kWh per square foot per month
const USAGE_PER_PERSON = 150; // kWh per person per month
const INTENSITY_MULTIPLIERS = {
    1: 0.6, // Very Low
    2: 0.8, // Low
    3: 1.0, // Medium
    4: 1.2, // High
    5: 1.4  // Very High
};

// Function to format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
};

// Function to update the intensity label
const updateIntensityLabel = (value) => {
    const labels = {
        1: 'Very Low',
        2: 'Low',
        3: 'Medium',
        4: 'High',
        5: 'Very High'
    };
    return labels[value];
};

// Function to calculate annual savings
const calculateSavings = () => {
    const homeSize = parseInt(homeSizeInput.value);
    const residents = parseInt(residentsInput.value);
    const intensity = parseInt(intensityInput.value);

    // Calculate monthly usage
    const baseSqFtUsage = homeSize * BASE_USAGE_PER_SQFT;
    const residentUsage = residents * USAGE_PER_PERSON;
    const totalMonthlyUsage = (baseSqFtUsage + residentUsage) * INTENSITY_MULTIPLIERS[intensity];

    // Calculate annual costs
    const annualUsage = totalMonthlyUsage * 12;
    const traditionalCost = annualUsage * TRADITIONAL_RATE;
    const nuclearCost = annualUsage * NUCLEAR_RATE;

    // Calculate savings
    const savings = traditionalCost - nuclearCost;
    return savings;
};

// Function to update all displays
const updateDisplays = () => {
    homeSizeValue.textContent = `${homeSizeInput.value} sq ft`;
    residentsValue.textContent = residentsInput.value;
    intensityValue.textContent = updateIntensityLabel(parseInt(intensityInput.value));
    
    const savings = calculateSavings();
    savingsAmount.textContent = formatCurrency(savings);
};

// Add event listeners to all inputs
homeSizeInput.addEventListener('input', updateDisplays);
residentsInput.addEventListener('input', updateDisplays);
intensityInput.addEventListener('input', updateDisplays);

// Initial calculation
updateDisplays();