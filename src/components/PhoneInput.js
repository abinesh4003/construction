'use client';

import { useState, useEffect } from 'react';

const countryList = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
  { code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: '+81', flag: '🇯🇵', name: 'Japan' },
  { code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: '+33', flag: '🇫🇷', name: 'France' },
  { code: '+39', flag: '🇮🇹', name: 'Italy' },
  { code: '+86', flag: '🇨🇳', name: 'China' },
  { code: '+7', flag: '🇷🇺', name: 'Russia' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa' },
];

export default function PhoneInput({ value, onChange }) {
  const [countryCode, setCountryCode] = useState('+91');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (value) {
      if (value.startsWith('+')) {
        const code = countryList.find(c => value.startsWith(c.code))?.code || '+91';
        const number = value.replace(code, '');
        setCountryCode(code);
        setPhoneNumber(number);
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);

  const handlePhoneChange = (e) => {
    const num = e.target.value.replace(/\D/g, '');
    setPhoneNumber(num);
    onChange(`${countryCode}${num}`);
  };

  const filteredCountries = countryList.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  return (
    <div className="flex w-full">
      {/* Country selector dropdown */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-100 flex items-center gap-1"
        >
          <span>{countryList.find(c => c.code === countryCode)?.flag}</span>
          <span>{countryCode}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute z-10 bg-white border border-gray-200 shadow-lg rounded-lg mt-1 w-56 max-h-60 overflow-y-auto">
            <div className="p-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country"
                className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
              />
            </div>
            {filteredCountries.map((country) => (
              <div
                key={country.code}
                onClick={() => {
                  setCountryCode(country.code);
                  onChange(`${country.code}${phoneNumber}`);
                  setOpen(false);
                  setSearch('');
                }}
                className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
              >
                <span>{country.flag}</span>
                <span className="flex-1 text-sm">{country.name}</span>
                <span className="text-gray-500 text-sm">{country.code}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Phone number input */}
      <input
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneChange}
        className="flex-1 px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        placeholder="9876543210"
        required
        maxLength={10}
      />
    </div>
  );

}
