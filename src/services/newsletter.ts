export async function subscribeToNewsletter(email: string): Promise<void> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate success (in a real app, this would make an API call)
  if (Math.random() > 0.1) { // 90% success rate
    return Promise.resolve();
  }
  
  // Simulate random failures
  return Promise.reject(new Error('Failed to subscribe'));
}