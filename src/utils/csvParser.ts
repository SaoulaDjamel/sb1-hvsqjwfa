import { Game } from '../types';

export const parseCSV = (csvText: string): Game[] => {
  const lines = csvText.trim().split('\n');
  const headers = parseCSVLine(lines[0]);
  
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const game: Record<string, string> = {};
    
    headers.forEach((header, index) => {
      game[header] = values[index] || '';
    });
    
    return game as unknown as Game;
  });
};

// Handle quoted values in CSV properly
const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"' && (i === 0 || line[i-1] !== '\\')) {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim().replace(/^"|"$/g, ''));
      current = '';
    } else {
      current += char;
    }
  }
  
  if (current) {
    result.push(current.trim().replace(/^"|"$/g, ''));
  }
  
  return result;
};

// Fallback data in case CSV loading fails
export const fallbackGames: Game[] = [
  {
    name: "Clash of Clans",
    version: "3.2.0",
    size: "432 MB",
    image: "https://i.postimg.cc/yxghsvK5/images.jpg",
    download_link: "https://unlockcontent.net/cl/i/g6p81p"
  },
  {
    name: "CarX Street",
    version: "1.10.0",
    size: "2.2 GB",
    image: "https://i.postimg.cc/NM4r26th/download.jpg",
    download_link: "https://locked1.com/cl/i/ndklm9"
  },
  {
    name: "Hockey All Stars",
    version: "1.99.1",
    size: "153 MB",
    image: "https://i.postimg.cc/L6bkRNLX/download.png",
    download_link: "https://locked1.com/cl/i/ndklg9"
  },
  {
    name: "World Truck Driving",
    version: "2.640.600",
    size: "700 MB",
    image: "https://i.postimg.cc/XNCxkmsY/download.jpg",
    download_link: "https://locked1.com/cl/i/8d8j53"
  }
];