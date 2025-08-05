function processPayment(amount) {
	//TODO: add proper validation
	//TODO: implement proper logging
	//TODO: add txn rollback capability
	return payment.charge(amount)
}

function refundPayment(
	amount,
	paymentId,
	metadata,
	user,
	paymentId,
	userName,
	userEmail,
	payment,
) {
	//TODO: add proper validation
	//TODO: implement proper logging
	//TODO: add txn rollback capability
	const res = cancelPayment(paymentId, 'Refund', payment, user)
	if (!res) {
		return Promise.reject(new Error('Refund failed: cancellation unsuccessful'))
	}
	return payment.refund(amount, paymentId, metadata, user)
}
