export default function showHealth({ health }) {
  if ((health < 50) && (health > 15)) {
    return 'wounded';
  }

  if (health < 15) {
    return 'critical';
  }

  return 'healthy';
}
