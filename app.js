// Form Validation
document.getElementById('lead-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const country = document.getElementById('country').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d+$/;

  if (!name || !email || !phone || !country) {
    alert('Please fill out all fields.');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!phoneRegex.test(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  console.log('Form submitted:', { name, email, phone, country });
  alert('Form submitted successfully!');
});

// Country Data
const countries = [
  { country: 'Russia', flag: '🇷🇺', students: 5000, ranking: 48, features: ['Top Medical Universities', 'Advanced Research Facilities', 'Cultural Diversity'] },
  { country: 'Uzbekistan', flag: '🇺🇿', students: 3000, ranking: 65, features: ['Affordable Tuition Fees', 'Growing Medical Institutions', 'Multicultural Environment'] },
  { country: 'Kazakhstan', flag: '🇰🇿', students: 3500, ranking: 60, features: ['Recognized Medical Degrees', 'Modern Medical Facilities', 'English Medium Courses'] },
  { country: 'Philippines', flag: '🇵🇭', students: 7000, ranking: 52, features: ['US-Based Curriculum', 'Affordable Living Costs', 'High FMGE Passing Rate'] },
  { country: 'Georgia', flag: '🇬🇪', students: 2800, ranking: 55, features: ['European Medical Standards', 'Safe & Student-Friendly', 'Affordable Tuition Fees'] },
  { country: 'Kyrgyzstan', flag: '🇰🇬', students: 3200, ranking: 70, features: ['Low Cost Education', 'WHO & MCI Recognized', 'English Medium MBBS'] },
  { country: 'Egypt', flag: '🇪🇬', students: 4000, ranking: 50, features: ['Historical Significance', 'Well-Established Medical Institutions', 'Affordable Education'] }
];

// Generate Country Cards
const countriesContainer = document.getElementById('countries-container');
countriesContainer.innerHTML = countries.map(country => `
  <div class="p-6 border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-4xl">${country.flag}</span>
      <div>
        <h3 class="font-bold text-xl text-gray-800">${country.country}</h3>
        <div class="flex items-center gap-1 text-yellow-500">
          <i data-lucide="star" class="w-4 h-4 fill-current"></i>
          <span class="text-sm">Ranked #${country.ranking}</span>
        </div>
      </div>
    </div>
    <div class="space-y-2">
      <div class="flex items-center gap-2 text-gray-600">
        <i data-lucide="users" class="w-4 h-4"></i>
        <p class="text-sm">${country.students}+ International Students</p>
      </div>
      ${country.features.map(feature => `
        <div class="flex items-center gap-2 text-gray-600">
          <i data-lucide="check-circle" class="w-4 h-4 text-green-500"></i>
          <p class="text-sm">${feature}</p>
        </div>
      `).join('')}
    </div>
  </div>
`).join('');

// Initialize Lucide Icons after dynamic content is added
lucide.createIcons();
