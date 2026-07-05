// Format currency to Indian Rupee format
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format number with Indian comma system
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

// Get initials from a name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

// Generate avatar background color from name
export function getAvatarColor(name: string): string {
  const colors = [
    '#3FA34D', '#F59E2A', '#C8A2E8', '#7DD3FC',
    '#f472b6', '#34d399', '#fb7185', '#a78bfa',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

// Render star rating as array
export function getStarArray(rating: number): boolean[] {
  return Array.from({ length: 5 }, (_, i) => i < rating);
}

// Truncate text to a max length
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

// Build WhatsApp link
export function buildWhatsAppUrl(phone: string, message: string): string {
  return `https://wa.me/${phone}?text=${message}`;
}
