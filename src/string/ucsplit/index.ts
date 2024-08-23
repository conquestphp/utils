export const ucsplit = (v: string) =>
	v.replace(/([a-z])([A-Z])/g, "$1 $2").split(/[-_ ]/);
