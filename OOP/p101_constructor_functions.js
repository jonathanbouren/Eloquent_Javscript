function makeMedic(type) {
  let medic = Object.create(protoMedic);
  medic.type = type;
  return medic;
}

console.log(makeMedic('remote'))