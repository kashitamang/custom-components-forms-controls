class RequestFailureError extends Error {
  constructor(res, message) {
    super(message);
    this.res = res;
  }
}

export const fetchOrReject = async (...args) => {
  const res = await fetch(...args);
  if (res.status >= 400) {
    throw new RequestFailureError(
      res,
      `Error requesting ${res.url} (${res.status}): ${res.body}`
    );
  } else {
    return res;
  }
};
