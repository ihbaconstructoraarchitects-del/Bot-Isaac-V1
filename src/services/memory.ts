// Memoria en RAM por usuario
const memory: Record<string, { role: string; content: string }[]> = {};

export const getHistory = (userId: string) => {
  if (!memory[userId]) memory[userId] = [];
  return memory[userId];
};

export const addToHistory = (userId: string, role: string, content: string) => {
  if (!memory[userId]) memory[userId] = [];

  memory[userId].push({ role, content });

  // Limitar historial a 20 mensajes para evitar saturar la API
  if (memory[userId].length > 20) {
    memory[userId].shift();
  }
};
