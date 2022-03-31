import { PERSON_PLACEHOLDER_URL } from 'constants/common.constants';
import format from 'date-fns/format';
import { Customer, CustomerFromApi } from 'types/customer.type';

// eslint-disable-next-line import/prefer-default-export
export const transformCustomer = (customer: CustomerFromApi): Customer => ({
  ...customer,
  dateOfBirth: format(new Date(customer.dateOfBirth), 'do MMM yyyy'),
  photoThumbnail: customer.photoThumbnail || PERSON_PLACEHOLDER_URL,
});
